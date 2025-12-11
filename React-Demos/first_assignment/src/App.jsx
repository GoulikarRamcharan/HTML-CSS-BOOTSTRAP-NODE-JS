import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about'
import Contact from './components/contactus'
import NewExpense from './components/NewExpense'
import Person from './components/person'
import News from './components/News'
import ExpenseItem from './components/ExpenseItem'

function App() {

  
   var dummy_expenses = [
                {id : 1 , exptitle :"Amazon " , expdate : new Date(2020,5,1) , price: "9000"},
                {id : 2 , exptitle: "Myntra ", expdate:  new Date(2020,11,4),price:"8000"},
                {id : 3 , exptitle:"Reliance Digital ", expdate: new Date(2020,10,6) , price:"80000"}
  ]

  let [expenses,setExpense] = useState(dummy_expenses)
  

  let gogetdetails = (getdata) => {

    setExpense(prev => [getdata,...prev])
  }

  let deleteHandler = (id) => {
      setExpense(prev => {
        return prev.filter(exp => exp.exptitle != id)
      })
  }
  let newsArticles = [
  {
    title: "Hamza wins the 2021 MISS UNIVERSE",
    subtitle: "A Historic Display Of Performance",
    content: `
Sandhu represented India and won Miss Universe 2021 on 13 December 2021 in Eilat, Israel. In the national costume round, Sandhu wore a pink royal lehenga with matching pink umbrella adorned with mirrors.

During the top 5 question and answer round, Sandhu picked Rena Sofer, who asked her "many people think climate change is a hoax, what would you do to convince them to take it seriously?" She answered: Honestly, my heart breaks to see how nature is going through a lot of problems and it is all due to our irresponsible behavior and I totally feel that this is the time to take actions and talk less because our each action could either kill or save nature.

Advancing to the top 3, host Steve Harvey asked: "What advice would you give to young women watching today?" Sandhu replied: Well I think the biggest pressure the youth of today is facing is to believe in themselves. To know that you are unique and that is what makes you beautiful.

Sandhu was crowned Miss Universe 2021 by Andrea Meza of Mexico. As Miss Universe, she traveled to Israel, the United States, the Philippines, Indonesia, Vietnam, South Africa, Colombia, Thailand and India.

On 14 January 2023, Sandhu crowned R'Bonney Gabriel of the United States as her successor at Miss Universe 2022 in New Orleans, Louisiana.
    `,
    author: "— Reported by Tushar Goulikar"
  },

  {
    title: "ISRO Successfully Tests Reusable Launch Vehicle",
    subtitle: "A Major Step Toward Low-Cost Space Missions",
    content: `
ISRO achieved a major breakthrough as it successfully conducted the RLV-LEX test, proving India’s first reusable launch vehicle technology. The test was carried out at the Aeronautical Test Range in Chitradurga, Karnataka.

The winged prototype, resembling a mini-shuttle, autonomously performed a high-accuracy landing after being dropped from a Chinook helicopter at a height of 4.5 km. This marks a critical step toward developing a launch system that can drastically reduce the cost of space access.

ISRO scientists mentioned that a fully reusable system may reduce launch expenses by nearly 80%. The next phase will involve an orbital re-entry test where the vehicle will survive extreme atmospheric conditions before landing autonomously.

The successful mission places India among the few nations developing reusable space technologies, alongside NASA, SpaceX and ESA.
    `,
    author: "— Article by Kavya Sharma"
  },

  {
    title: "India Breaks World Record with Largest Solar Power Installation",
    subtitle: "A New Milestone in Renewable Energy",
    content: `
India has officially commissioned the world’s largest solar power plant in Bhadla, Rajasthan, spanning more than 14,000 acres and generating 2.25 GW of renewable energy. The project is part of India's commitment to achieving 500 GW of clean energy by 2030.

The government stated that the project not only ensures sustainable energy production but also provides employment opportunities to thousands in the region. The Bhadla Solar Park uses advanced tracking systems that tilt panels automatically based on sun positioning, improving efficiency by nearly 20%.

Environmental experts say this accomplishment will reduce carbon emissions by nearly 4 million tons annually. The milestone strengthens India's position as a global leader in renewable energy.

Officials revealed that similar mega-projects are planned across Gujarat, Maharashtra, and Madhya Pradesh in the coming years.
    `,
    author: "— Written by Aarav Deshmukh"
  }
];

  return (
    <>
      <About />
      <Contact />
      <hr></hr>
      
      <hr></hr>
      
      <News data = {newsArticles}/>
        <NewExpense getdetails = {gogetdetails}/>
      {
        expenses.map(expense => (
          <ExpenseItem key ={expense.id}
            exptitle = {expense.exptitle}
            expdate = {expense.expdate}
            price = {expense.price} 
            onDelete ={deleteHandler}/>
        ))
      }
      

    </>
  )
}

export default App
