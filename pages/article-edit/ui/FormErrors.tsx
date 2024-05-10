import { useActionData } from "@remix-run/react";
import type { action } from "../api/action";

export function FormErrors() {
  const actionData = useActionData<typeof action>();

  console.log(null);
  return null;
  // return actionData?.errors != null ? (
  //   <ul className="error-messages">
  //     {actionData.errors.map((error) => (
  //       <li key={error}>{error}</li>
  //     ))}
  //   </ul>
  // ) : null;
}