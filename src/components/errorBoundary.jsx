import React from 'react';


export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught an error:', error, info.componentStack);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            const FallbackComponent = this.props.fallback;
            return <FallbackComponent error={error} resetErrorBoundary={this.handleReset} />;
        }

        return this.props.children;
    }
}
