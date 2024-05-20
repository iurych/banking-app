import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { 
    firstName: 'Iury', 
    lastName: 'Chiganer', 
    email: 'example@gmail.com' 
  }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage tour account and transactions efficently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
      />
    </section>
  )
}

export default Home
