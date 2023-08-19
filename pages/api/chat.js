export default async (req, res) => {
  if (req.method === 'POST') {
      try {
          const azureFunctionRes = await fetch(process.env.AZURE_FUNCTION_ENDPOINT, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text: req.body.text }),
          });

          const data = await azureFunctionRes.json();

          // Directly extract the response, total_tokens, and cost from Azure function's response.
          const { response, total_tokens, cost } = data;

          res.status(200).json({ response, total_tokens, cost });

      } catch (error) {
          res.status(500).json({ error: "Error communicating with Azure function" });
      }
  } else {
      res.status(405).end(); // Method Not Allowed
  }
};
