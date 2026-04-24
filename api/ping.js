export default async function handler(req, res) {
  try {
    const response = await fetch("https://vegitable-price-v2-beta.vercel.app/scrape");

    const data = await response.text();

    res.status(200).json({
      success: true,
      status: response.status,
      message: "GET request sent successfully",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}