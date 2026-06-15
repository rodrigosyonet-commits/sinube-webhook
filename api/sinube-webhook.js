export default async function handler(req, res) {
  try {
    // ✅ Log completo del request
    console.log("🔔 METHOD:", req.method);
    console.log("🔔 HEADERS:", JSON.stringify(req.headers, null, 2));
    console.log("🔔 BODY:", JSON.stringify(req.body, null, 2));

    // ✅ Responder OK para que Sinube no reintente
    res.status(200).json({
      success: true,
      message: "Webhook recibido correctamente",
    });

  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}
