declare module "moment-with-locales-es6" {
    import * as moment from "moment/min/moment.min.js";
    import 'moment/locale/it';
    moment.locale('it');
    export default moment;
}
