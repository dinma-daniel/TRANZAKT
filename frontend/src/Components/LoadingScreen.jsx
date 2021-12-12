import {motion} from 'framer-motion';

export default function LoadingScreen(props) {
    return (
        <div className="loaderPage">
            <div className="loaderContainer">
                <motion.img
                className="logo"
                src={require('../images/2.svg').default}
                alt="tranzakt logo"
                initial={{
                    y: 350
                }}
                animate={{
                    scale: [1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
                    y: [350, 350, 350, 350, 350, 350, 350, 270],
                    transition: {
                        duration: 4.5
                    }
                }}/>
                <motion.img
                className="logo"
                src={require('../images/3.svg').default}
                alt="tranzakt logo"
                initial={{
                    y: 50,
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    y: -30
                }}
                transition={{
                    duration: 0.5,
                    delay: 4.5
                }}
                />
                <motion.img
                className="logo"
                src={require('../images/2text.svg').default}
                alt="tranzakt logo"
                initial={{
                    y: -350,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    delay: 5.2,
                }}
                onAnimationComplete={
                    setTimeout(() => {
                        props.history.replace('/')
                    }, 8000)
                    
                }
                />
            </div>
        </div>
    );
}
