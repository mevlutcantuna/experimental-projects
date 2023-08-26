import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";

function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <Button onClick={() => setCounter((prev) => prev - 1)}>Descrease</Button>
      <Card className="mx-4">
        <CardHeader>Counter</CardHeader>
        <CardContent className="flex items-center justify-center text-2xl">
          {counter}
        </CardContent>
      </Card>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Increase</Button>
    </div>
  );
}

export default App;
