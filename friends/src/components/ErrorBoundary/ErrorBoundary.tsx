import React, { ErrorInfo, PureComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  message?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends PureComponent<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children, message } = this.props;

    if (hasError) {
      return (
        <div>
          Something went wrong!
        </div>
      );
    }

    return children;
  }
}
