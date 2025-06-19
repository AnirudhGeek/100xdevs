import React from 'react';

//this below one is the blackbox for the error boundary code so whenever the component gets the error then the whole app doesn't crashes (only the part inside render()'s return statement gets called in the UI. You can design this according to your componrnts UI so that if the app crashes then the whole website can't be able to load. It is adviced to wrap you components inside the error boundry so that your whole app doesnt crashes(specially mobile apps))
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

const App = () => {
    return (
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
    );
};

export default App;
