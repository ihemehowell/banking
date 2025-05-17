import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
import { getLoggedInUser } from '@/lib/actions/user.actions';


const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home '>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type='greeting'
          title='Welcome'
          user={loggedIn?.name || 'Guest'}
          subtext='This is your personal space to manage your tasks and projects.'
          />
          
          <TotalBalancebox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1250.55}
          />

        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 250.50}, {currentBalance: 550.50}]}
      />
    </section>
  )
}

export default Home
