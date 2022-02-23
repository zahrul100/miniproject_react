import VacancyDetailComponent from "./component/VacancyDetail"
import VacancyService from "../vacany/service/VacancyService"
import VacancyDetailBloc from "./bloc/VacancyDetailBloc"

const VacancyDetail = ()=>{
    return(
    <div>
        <VacancyDetailComponent bloc={() => VacancyDetailBloc(VacancyService)}/>
    </div>)
}
export default VacancyDetail;