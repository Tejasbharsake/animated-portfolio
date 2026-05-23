import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParallax } from 'react-scroll-parallax';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
} }) => {

    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/repos/Tejasbharsake/animated-portfolio')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoUri = `mailto:tejasbharsake9@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
        window.open(mailtoUri, '_blank');
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0]
    });
    return (
        <div className='ai-contact'>
            <div
                ref={ref}
                className='ai-contact-zebra-img'
                style={{
                    backgroundImage: `url(${'/assets/arrow-sample.svg'})`,
                }}>

            </div>
            <div className='ai-contact-box'>
                <div className='container flex-center flex-column'>
                    <div className='ai-contact-box-width'>
                        <div className='ai-contact-label'>{label}</div>
                        <div className='ai-contact-title'>{heading} </div>
                        <div className='ai-contact-text'>{description}</div>
                        
                        {isSubmitted ? (
                            <div className="ai-contact-success">
                                <h3>Thank You!</h3>
                                <p>Your message draft has been generated. Please send the email to get in touch!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="ai-contact-form">
                                <div className="form-group mb-3">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                        className="form-control ai-input"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                        className="form-control ai-input"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea 
                                        placeholder="Your Message" 
                                        value={message} 
                                        onChange={(e) => setMessage(e.target.value)} 
                                        required 
                                        rows="5"
                                        className="form-control ai-textarea"
                                    />
                                </div>
                                <button type="submit" className="ai-button w-100">
                                    Send Message
                                </button>
                            </form>
                        )}

                        <div onClick={handleBuiltByClick} className='ai-contact-git-section'>
                            <div>{designAndBuiltBy}</div>
                            {!!(githubInfo.stars && githubInfo.forks) && (
                                <div>
                                    <span>
                                        <Star />
                                        <>{' '}{githubInfo.stars.toLocaleString()}</>
                                    </span>
                                    {' '}
                                    <span>
                                        <GitFork />
                                        <>{' '}{githubInfo.forks.toLocaleString()}</>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact