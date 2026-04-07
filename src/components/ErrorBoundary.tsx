import React, { Component, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-16 flex flex-col items-center justify-center gap-4 text-center px-6">
          <AlertTriangle className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
          <p className="text-muted-foreground font-serif text-lg">
            {this.props.fallbackMessage ?? 'Coś poszło nie tak. Spróbuj odświeżyć stronę.'}
          </p>
          <Button variant="outline" size="sm" onClick={this.handleRetry}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Spróbuj ponownie
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
