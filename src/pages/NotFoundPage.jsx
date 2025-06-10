import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div>
            
        <div className="not-found">
            <img src="/Images/dino.png" alt="Dino" id='dino' />
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <a href="/homepage">Go Back to Home</a>
        </div>
        </div>
    )
}

export default NotFoundPage