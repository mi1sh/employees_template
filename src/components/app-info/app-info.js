import './app-info.css';

const AppInfo = ({employees, employeesIncrease}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников</h1>
            <h1>Общее число сотрудников: {employees}</h1>
            <h2>Премию получат: {employeesIncrease}</h2>
        </div>
    );
}

export default AppInfo;