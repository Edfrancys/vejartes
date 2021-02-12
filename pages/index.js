import Head from 'next/head'
import { FaBars } from 'react-icons/fa'

export default function Home() {

    function menuTogle(){
        document.getElementById('menuTogle').classList.toggle('hidden')
    }

    return (
        <>
            <Head>
                <title>Agência Vejartes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className='w-screen py-2 bg-gray-800 flex justify-center'>
                <nav className='flex justify-between w-full sm:w-9/12 px-8' >
                    <div className='text-white'>Logo</div>
                    <div className='text-white hidden sm:block' >Home - Sobre - Portifólio - Contato</div>
                    <div className='text-white hidden sm:block'>Contato</div>
                    <div className='sm:hidden items-center ' >
                        <button onClick={menuTogle} className='px-2 text-white border-white'> <FaBars /> </button>  
                    </div>
                </nav>
                
            </header>
            <div id='menuTogle' className='w-full flex justify-center hidden'>
                <div className='w-96 bg-gray-700 text-center text-white'>
                    <div className='py-1'>Home</div>
                    <div className='py-1'>Sobre</div>
                    <div className='py-1'>Portifólio</div>
                    <div className='py-1'>Contato</div>
                </div>
            </div>


        </>
    )
}
