import OpenAI from "openai";
import { useAuth } from "../../context/AuthProvider";

const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY;

export default function Prova() {

  const { userData, loginUserOnStartup, setLogout } = useAuth()

  const openai = new OpenAI({apiKey: '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', dangerouslyAllowBrowser: true});
  
  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5",
    });

    console.log(completion.choices[0]);
  }

  main();



  return (
    <div>
      {userData && (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      )}
    </div>
  );
}

