const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override')
const hbs = exphbs.create({ extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default'

            const icons = {
                default: 'oi oi-elevator',
                asc: 'oi oi-sort-ascending',
                desc: 'oi oi-sort-descending'
            }

            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc'
            }

            const icon = icons[sortType]
            const type = types[sortType]

            return `<a href="?_sort&column=${field}&type=${type}" >
                <span class="${icon}"></span>
            </a>`
        }
}
});
const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/SortMiddleware')

const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))

//Custom middlewares
app.use(SortMiddleware)

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
