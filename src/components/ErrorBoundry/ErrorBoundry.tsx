// components/ErrorBoundary.tsx
import { ErrorBoundaryProps, ErrorBoundaryState } from '@Interfaces';
import React from "react";

/**
 * Error handler which handles any render failure in the app
 * It returns a fallback state in any failure
 */

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, info);
    // You can log this error to a monitoring service here
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Something went wrong.</h1>
          <p className="text-gray-500 mb-4">
            {error?.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
