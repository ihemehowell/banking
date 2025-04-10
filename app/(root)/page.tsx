import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalancebox from '@/components/ui/TotalBalancebox';


const Home = () => {
  const loggedIn ={ firstName: 'Howell'};

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='This is your personal space to manage your tasks and projects.'
          />
          
          <TotalBalancebox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1250.55}
          />

        </header>
      </div>
    </section>
  )
}

export default Home
