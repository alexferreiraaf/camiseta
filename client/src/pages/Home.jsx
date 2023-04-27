import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

import Logo from '../public/threejs.png'
const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src={Logo}
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                VAMOS <br className='xl:block hidden' /> CRIAR
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Crie sua camisa única e exclusiva com nossas novas ferramentas de
                personalização 3D. <strong>Solte sua imaginação</strong>{" "} e definir seu próprio estilo.
              </p>

              <CustomButton
                type='filled'
                title='Personalize'
                handLeClick={() => state.intro = false}
                customStyLes='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home