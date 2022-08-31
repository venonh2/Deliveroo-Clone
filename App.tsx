import "react-native-gesture-handler";
import ErrorBoundary from "react-native-error-boundary";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

const errorHandler = (error: Error, stackTrace: string) => {
  console.log(error, stackTrace);
};

export default function App() {
  return (
    <ErrorBoundary onError={errorHandler}>
      <StatusBar style="auto" />
      <Routes />
    </ErrorBoundary>
  );
}
