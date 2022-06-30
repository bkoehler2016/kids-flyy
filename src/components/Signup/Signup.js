import React, { useState } from "react";
import { Input, Button, Form } from "reactstrap";

function Signup() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form className="formClass">
      <Input
        className="form-control-lg"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="text"
        name="Name"
        required
      />
      <Input
        className="form-control-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <Input
        className="form-control-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default Signup;
