import React from 'react'
// import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DataTable from '../Components/DataTable/DataTable'
import Table from '../Components/Table/Table'
function EmployeeList() {
    const { employeeList } = useSelector(store => store.hr)
    const column = [{ Header: "First Name", accessor: "firstName" }, { Header: "Last Name", accessor: "lastName" }, { Header: "Start Date", accessor: "startDate" }, { Header: "Department", accessor: "department" }, { Header: "Date of Birth", accessor: "dateOfBirth" }, { Header: "Street", accessor: "street" }, { Header: "City", accessor: "city" }, { Header: "State", accessor: "state" }, { Header: "Zip Code", accessor: "zipCode" }]
    const data = employeeList
    const datas = [{ "firstName": "Jacob", "lastName": "Devonald", "startDate": "6/24/2022", "department": "Training", "dateOfBirth": "4/12/2022", "street": "Oxford", "city": "Pereiros", "state": "06", "zipCode": "3040-723" },
    { "firstName": "Nikolos", "lastName": "Huncote", "startDate": "1/10/2023", "department": "Sales", "dateOfBirth": "11/11/2022", "street": "Chinook", "city": "Datun", "state": "", "zipCode": "" },
    { "firstName": "Arlinda", "lastName": "Tressler", "startDate": "1/7/2023", "department": "Human Resources", "dateOfBirth": "1/4/2023", "street": "Duke", "city": "Shimotoda", "state": "", "zipCode": "677-0043" },
    { "firstName": "Renard", "lastName": "Castree", "startDate": "9/2/2022", "department": "Engineering", "dateOfBirth": "8/23/2022", "street": "Kingsford", "city": "San Francisco", "state": "TAM", "zipCode": "87504" },
    { "firstName": "Odo", "lastName": "Schreiner", "startDate": "11/9/2022", "department": "Human Resources", "dateOfBirth": "1/1/2023", "street": "Vera", "city": "Ubajami", "state": "", "zipCode": "" },
    { "firstName": "Luce", "lastName": "McCullough", "startDate": "4/8/2022", "department": "Legal", "dateOfBirth": "2/7/2023", "street": "Macpherson", "city": "Łazy", "state": "", "zipCode": "76-002" },
    { "firstName": "Katrinka", "lastName": "McDyer", "startDate": "8/1/2022", "department": "Support", "dateOfBirth": "5/24/2022", "street": "Jenna", "city": "Gaspar Hernández", "state": "", "zipCode": "11203" },
    { "firstName": "Gael", "lastName": "Boltwood", "startDate": "9/24/2022", "department": "Legal", "dateOfBirth": "1/21/2023", "street": "Larry", "city": "Peer", "state": "", "zipCode": "" },
    { "firstName": "Gussi", "lastName": "Riatt", "startDate": "1/12/2023", "department": "Services", "dateOfBirth": "11/23/2022", "street": "Anniversary", "city": "Jinping", "state": "", "zipCode": "" },
    { "firstName": "Porter", "lastName": "Olliffe", "startDate": "11/30/2022", "department": "Support", "dateOfBirth": "11/6/2022", "street": "Sloan", "city": "Kleszczewo", "state": "", "zipCode": "63-005" },
    { "firstName": "Betsy", "lastName": "Beushaw", "startDate": "1/10/2023", "department": "Services", "dateOfBirth": "1/14/2023", "street": "Hoepker", "city": "Jinghai", "state": "", "zipCode": "" },
    { "firstName": "Rollo", "lastName": "O' Timony", "startDate": "11/9/2022", "department": "Marketing", "dateOfBirth": "5/25/2022", "street": "Mallard", "city": "Pećigrad", "state": "", "zipCode": "" },
    { "firstName": "Zenia", "lastName": "Gomar", "startDate": "11/30/2022", "department": "Marketing", "dateOfBirth": "4/25/2022", "street": "Cascade", "city": "Berat", "state": "", "zipCode": "" },
    { "firstName": "Maud", "lastName": "Stanfield", "startDate": "2/19/2023", "department": "Human Resources", "dateOfBirth": "7/11/2022", "street": "Bultman", "city": "Várzea da Serra", "state": "18", "zipCode": "3610-193" },
    { "firstName": "Mikey", "lastName": "Fitchett", "startDate": "2/4/2023", "department": "Engineering", "dateOfBirth": "9/28/2022", "street": "Pennsylvania", "city": "Liuhu", "state": "", "zipCode": "" },
    { "firstName": "Brigitte", "lastName": "Galiero", "startDate": "10/13/2022", "department": "Product Management", "dateOfBirth": "5/3/2022", "street": "Loeprich", "city": "Zhouwang", "state": "", "zipCode": "" },
    { "firstName": "Kassandra", "lastName": "Corstan", "startDate": "2/9/2023", "department": "Training", "dateOfBirth": "7/14/2022", "street": "Kennedy", "city": "Imsil", "state": "", "zipCode": "" },
    { "firstName": "Tandy", "lastName": "Dykes", "startDate": "2/4/2023", "department": "Legal", "dateOfBirth": "9/2/2022", "street": "Grim", "city": "Bacun", "state": "", "zipCode": "" },
    { "firstName": "Roy", "lastName": "Torrent", "startDate": "10/31/2022", "department": "Services", "dateOfBirth": "9/4/2022", "street": "Lien", "city": "Lovisa", "state": "", "zipCode": "94800" },
    { "firstName": "Jourdain", "lastName": "Ash", "startDate": "8/22/2022", "department": "Sales", "dateOfBirth": "6/4/2022", "street": "Sugar", "city": "Старо Нагоричане", "state": "", "zipCode": "1312" },
    { "firstName": "Emogene", "lastName": "Hullins", "startDate": "5/8/2022", "department": "Human Resources", "dateOfBirth": "9/11/2022", "street": "Anderson", "city": "Victoria Falls", "state": "", "zipCode": "" },
    { "firstName": "Alli", "lastName": "Bottby", "startDate": "9/8/2022", "department": "Sales", "dateOfBirth": "5/16/2022", "street": "Village", "city": "Baiyang", "state": "", "zipCode": "" },
    { "firstName": "Addi", "lastName": "Bilbee", "startDate": "6/23/2022", "department": "Training", "dateOfBirth": "3/9/2023", "street": "Brentwood", "city": "Yelets", "state": "", "zipCode": "399778" },
    { "firstName": "Robinet", "lastName": "Birks", "startDate": "12/16/2022", "department": "Marketing", "dateOfBirth": "12/13/2022", "street": "Spohn", "city": "Sarnia", "state": "ON", "zipCode": "N7V" },
    { "firstName": "Ondrea", "lastName": "Fright", "startDate": "6/18/2022", "department": "Engineering", "dateOfBirth": "10/2/2022", "street": "Killdeer", "city": "Taishan", "state": "", "zipCode": "" },
    { "firstName": "Edeline", "lastName": "MacDunleavy", "startDate": "3/18/2022", "department": "Marketing", "dateOfBirth": "2/10/2023", "street": "Prairieview", "city": "Tchaourou", "state": "", "zipCode": "" },
    { "firstName": "Geoffry", "lastName": "Lessmare", "startDate": "6/15/2022", "department": "Support", "dateOfBirth": "4/23/2022", "street": "Johnson", "city": "Gardinovci", "state": "", "zipCode": "" },
    { "firstName": "Hurley", "lastName": "Blei", "startDate": "5/24/2022", "department": "Sales", "dateOfBirth": "10/25/2022", "street": "Ridgeway", "city": "Laguna Limpia", "state": "", "zipCode": "3515" },
    { "firstName": "Isidora", "lastName": "Wattisham", "startDate": "10/20/2022", "department": "Human Resources", "dateOfBirth": "3/2/2023", "street": "Chive", "city": "Arys", "state": "", "zipCode": "" },
    { "firstName": "Tiffy", "lastName": "Stoneman", "startDate": "5/13/2022", "department": "Marketing", "dateOfBirth": "5/3/2022", "street": "Southridge", "city": "Capandanan", "state": "", "zipCode": "2445" },
    { "firstName": "Duffie", "lastName": "Berrecloth", "startDate": "12/1/2022", "department": "Human Resources", "dateOfBirth": "11/29/2022", "street": "Morning", "city": "Hedao", "state": "", "zipCode": "" },
    { "firstName": "Almeria", "lastName": "MacClenan", "startDate": "11/22/2022", "department": "Services", "dateOfBirth": "7/27/2022", "street": "Beilfuss", "city": "Luže", "state": "", "zipCode": "538 54" },
    { "firstName": "Madlin", "lastName": "Andrez", "startDate": "10/15/2022", "department": "Sales", "dateOfBirth": "3/18/2022", "street": "Lakewood Gardens", "city": "Gulou", "state": "", "zipCode": "" },
    { "firstName": "Korney", "lastName": "Oxtoby", "startDate": "7/20/2022", "department": "Marketing", "dateOfBirth": "10/23/2022", "street": "Continental", "city": "Zhaizigou", "state": "", "zipCode": "" },
    { "firstName": "Bartholomeo", "lastName": "Bootland", "startDate": "11/29/2022", "department": "Services", "dateOfBirth": "5/30/2022", "street": "Nobel", "city": "Jiaojie", "state": "", "zipCode": "" },
    { "firstName": "Rasla", "lastName": "Estabrook", "startDate": "1/31/2023", "department": "Training", "dateOfBirth": "6/2/2022", "street": "Blaine", "city": "Pawa", "state": "", "zipCode": "4501" },
    { "firstName": "Denney", "lastName": "Pablos", "startDate": "6/19/2022", "department": "Marketing", "dateOfBirth": "10/19/2022", "street": "Holy Cross", "city": "Stanišić", "state": "", "zipCode": "" },
    { "firstName": "Angeli", "lastName": "Roloff", "startDate": "3/31/2022", "department": "Services", "dateOfBirth": "2/11/2023", "street": "Jana", "city": "Brodokalmak", "state": "", "zipCode": "456684" },
    { "firstName": "Andres", "lastName": "Otton", "startDate": "11/12/2022", "department": "Research and Development", "dateOfBirth": "3/10/2022", "street": "1st", "city": "Cangkringan", "state": "", "zipCode": "" },
    { "firstName": "Mallissa", "lastName": "Lembke", "startDate": "3/28/2022", "department": "Accounting", "dateOfBirth": "5/2/2022", "street": "Judy", "city": "Shangtian", "state": "", "zipCode": "" },
    { "firstName": "Colet", "lastName": "Huckerby", "startDate": "12/25/2022", "department": "Engineering", "dateOfBirth": "9/14/2022", "street": "Scofield", "city": "Berbek", "state": "", "zipCode": "" },
    { "firstName": "Ephraim", "lastName": "Kleine", "startDate": "12/18/2022", "department": "Research and Development", "dateOfBirth": "10/11/2022", "street": "Gulseth", "city": "Kaum Kaler", "state": "", "zipCode": "" },
    { "firstName": "Karyn", "lastName": "Baistow", "startDate": "8/29/2022", "department": "Services", "dateOfBirth": "11/9/2022", "street": "Dovetail", "city": "Diébougou", "state": "", "zipCode": "" },
    { "firstName": "Herta", "lastName": "Boys", "startDate": "7/7/2022", "department": "Support", "dateOfBirth": "7/9/2022", "street": "Melrose", "city": "Hyesan-si", "state": "", "zipCode": "" },
    { "firstName": "Barton", "lastName": "Gellan", "startDate": "2/20/2023", "department": "Support", "dateOfBirth": "12/9/2022", "street": "Dexter", "city": "Pehčevo", "state": "", "zipCode": "2326" },
    { "firstName": "Brittaney", "lastName": "Comusso", "startDate": "12/29/2022", "department": "Engineering", "dateOfBirth": "6/9/2022", "street": "Kipling", "city": "Oemofa", "state": "", "zipCode": "" },
    { "firstName": "Debora", "lastName": "Nelissen", "startDate": "1/16/2023", "department": "Services", "dateOfBirth": "7/17/2022", "street": "Morning", "city": "Purabaya", "state": "", "zipCode": "" },
    { "firstName": "Devan", "lastName": "Bertelmot", "startDate": "3/14/2022", "department": "Sales", "dateOfBirth": "7/21/2022", "street": "Brown", "city": "Tamra", "state": "", "zipCode": "" },
    { "firstName": "Giustina", "lastName": "Aiston", "startDate": "9/5/2022", "department": "Business Development", "dateOfBirth": "6/22/2022", "street": "Oxford", "city": "Nanxing", "state": "", "zipCode": "" },
    { "firstName": "Selinda", "lastName": "Timeby", "startDate": "1/9/2023", "department": "Business Development", "dateOfBirth": "5/12/2022", "street": "Continental", "city": "Al Mukallā", "state": "", "zipCode": "" },
    { "firstName": "Lettie", "lastName": "Meeks", "startDate": "8/19/2022", "department": "Engineering", "dateOfBirth": "8/31/2022", "street": "Heath", "city": "Capela", "state": "13", "zipCode": "4620-297" },
    { "firstName": "Hyacinthie", "lastName": "Thomasson", "startDate": "8/31/2022", "department": "Accounting", "dateOfBirth": "3/16/2022", "street": "Atwood", "city": "Karlskoga", "state": "T", "zipCode": "691 78" },
    { "firstName": "Nevsa", "lastName": "Doll", "startDate": "1/20/2023", "department": "Training", "dateOfBirth": "9/16/2022", "street": "Novick", "city": "Munjungan", "state": "", "zipCode": "" },
    { "firstName": "Mei", "lastName": "Cufley", "startDate": "11/26/2022", "department": "Research and Development", "dateOfBirth": "7/20/2022", "street": "Division", "city": "Makamba", "state": "", "zipCode": "" },
    { "firstName": "Benoit", "lastName": "Havick", "startDate": "6/30/2022", "department": "Support", "dateOfBirth": "8/24/2022", "street": "Beilfuss", "city": "Poja", "state": "", "zipCode": "" },
    { "firstName": "Vaughn", "lastName": "Denver", "startDate": "12/5/2022", "department": "Marketing", "dateOfBirth": "3/26/2022", "street": "Forest Run", "city": "Budapest", "state": "BU", "zipCode": "1213" },
    { "firstName": "Cordie", "lastName": "Hodcroft", "startDate": "3/9/2023", "department": "Human Resources", "dateOfBirth": "11/15/2022", "street": "Mayfield", "city": "Barabedang", "state": "", "zipCode": "" },
    { "firstName": "Beret", "lastName": "Bodiam", "startDate": "7/17/2022", "department": "Services", "dateOfBirth": "10/8/2022", "street": "Straubel", "city": "Sainte-Agathe-des-Monts", "state": "QC", "zipCode": "J8C" },
    { "firstName": "Cassaundra", "lastName": "Astling", "startDate": "9/17/2022", "department": "Marketing", "dateOfBirth": "5/15/2022", "street": "Jenifer", "city": "Lyublino", "state": "", "zipCode": "433762" },
    { "firstName": "Candi", "lastName": "Barney", "startDate": "8/19/2022", "department": "Marketing", "dateOfBirth": "9/24/2022", "street": "Lerdahl", "city": "La Curva", "state": "", "zipCode": "1235" },
    { "firstName": "Cybill", "lastName": "Ishaki", "startDate": "12/26/2022", "department": "Support", "dateOfBirth": "12/4/2022", "street": "Sundown", "city": "Inashiki", "state": "", "zipCode": "925-0563" },
    { "firstName": "Ileana", "lastName": "Klaessen", "startDate": "8/7/2022", "department": "Product Management", "dateOfBirth": "4/22/2022", "street": "Cascade", "city": "Novi Travnik", "state": "", "zipCode": "" },
    { "firstName": "Elset", "lastName": "Fudge", "startDate": "6/18/2022", "department": "Training", "dateOfBirth": "5/31/2022", "street": "Raven", "city": "At-Bashi", "state": "", "zipCode": "" },
    { "firstName": "Tallou", "lastName": "Giacopetti", "startDate": "1/11/2023", "department": "Accounting", "dateOfBirth": "7/3/2022", "street": "Reindahl", "city": "Belén", "state": "", "zipCode": "" },
    { "firstName": "Elroy", "lastName": "Ibbotson", "startDate": "5/15/2022", "department": "Research and Development", "dateOfBirth": "10/1/2022", "street": "Marquette", "city": "Kostarea Satu", "state": "", "zipCode": "" },
    { "firstName": "Talyah", "lastName": "Gideon", "startDate": "7/6/2022", "department": "Support", "dateOfBirth": "11/15/2022", "street": "Quincy", "city": "Sanchahe", "state": "", "zipCode": "" }]
    return (
        <div className='wrapper'>
            <h1 className='title'>Current Employee</h1>
            {employeeList && <DataTable tHead={column} datas={datas} />}
            {/* {employeeList && <DataTable pagination columns={columns} data={data} noDataComponent sortFunction={true} />} */}
            {/* <Table column={column} datas={data} /> */}
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList
