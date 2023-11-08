import DateInput from "./D1TM1/components/dateInput/dateInput";



function Home() {
    return (<>
        <h1>Home Page</h1>
        <a href="/details">Details</a>
        <DateInput description={"Date of Birth"} required/>
    </>)
}

export default Home;