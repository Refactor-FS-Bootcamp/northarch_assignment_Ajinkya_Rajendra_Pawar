import { useExcelContext } from "./components/Context/ExcelContext";
import ParseExcel from "./components/ParseExcel";
import Table from "./components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let {excelFile} = useExcelContext()

  return (
    <>
      <ParseExcel />
      {
        excelFile && excelFile.length>=1 && <Table />
      }
    </>
  );
}

export default App;