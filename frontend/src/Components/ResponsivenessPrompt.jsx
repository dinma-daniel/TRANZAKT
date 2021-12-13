import {motion} from 'framer-motion';

export default function ResponsivenessPrompt(props) {
    return (
        <div className="responsivenessPrompt">
            <div className="loaderAnimationContainerBigScreens">
            <div className="contentContainer">
                <motion.img src={require('../images/red.svg').default}  className="bigScreenImage" 
                  initial={{
                        scale: 0.8, 
                        opacity: 0, 
                        y: 150
                    }}
                    animate={{
                        scale: 1, 
                        opacity: 1, 
                        y: 0
                    }}
                    transition={{
                        delay: 0.3
                    }}
                />
                <motion.div className="textContainer"
                initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1, 
                    }}
                    transition={{
                        delay: 0.5, 
                        duration: 0.5
                    }}
                >
                    <h1>Hey there,</h1>
                    <h2>Please Switch to a Bigger device to use tranzakt</h2>
                </motion.div>
            </div>
            </div>
        </div>
    );
}