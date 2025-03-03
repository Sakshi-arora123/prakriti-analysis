import React from "react";
import "./Result.css";
import vataImage from "./vata-image.png"; // Ensure correct path
import pittaImage from "./pitta-image.png"; // Add Pitta image
import kaphaImage from "./kapha-image.png"; // Add Kapha image
import kaphaVataImage from "./kapha-vata-image.png"; // Add KaphaVata image
import vataPittaImage from "./vata-Pitta-image.png"; // Add VataPitta image
import kaphaPittaImage from "./kapha-pitta-image.png"; // Add KaphaPitta image (Ensure correct path)

function Result({ dosha, results, avatar }) {
  // Define dosha-specific data for individual doshas and combinations
  const doshaData = {
    Vata: {
      qualities: [
        "Vata is dry, leading to rough skin and low moisture.",
        "Vata is light, making individuals energetic and active.",
        "Vata is cold, making people sensitive to cold weather.",
        "Vata is rough, causing dryness in skin and joints.",
        "Vata is subtle, leading to quick thinking and movement.",
        "Vata is mobile, making people restless and always on the move.",
      ],
      balance: [
        "Eat warm, moist, and oily foods.",
        "Stick to a regular daily routine.",
        "Engage in calming activities like yoga and meditation.",
        "Stay warm and dress appropriately.",
        "Avoid stimulants and take time to rest.",
        "Include grounding foods like root vegetables and grains.",
      ],
      dos: [
        "Eat nourishing, warm meals.",
        "Follow a consistent sleep schedule.",
        "Practice relaxation techniques.",
      ],
      donts: [
        "Avoid cold, dry, and raw foods.",
        "Don’t skip meals.",
        "Avoid overstimulation and excessive travel.",
      ],
      image: vataImage, // Image for Vata
    },
    Pitta: {
      qualities: [
        "Pitta is hot, making individuals feel warm or experience hot flashes.",
        "Pitta is sharp, leading to quick decisions but irritability.",
        "Pitta is light, causing agility and active energy.",
        "Pitta is intense, resulting in strong emotions and actions.",
        "Pitta is oily, contributing to glowing skin but acne.",
        "Pitta is fluid, leading to adaptability and easy energy flow.",
      ],
      balance: [
        "Eat cooling, calming foods.",
        "Avoid excessive heat and sun exposure.",
        "Practice relaxation techniques.",
        "Stay hydrated with cool beverages.",
        "Engage in calming exercises such as swimming or yoga.",
        "Add bitter and sweet foods to your diet to balance heat.",
      ],
      dos: [
        "Consume fresh fruits and vegetables.",
        "Engage in meditation and cooling exercises.",
        "Maintain a balanced work-life routine.",
      ],
      donts: [
        "Avoid spicy, oily, and fried foods.",
        "Don't overwork or stress too much.",
        "Avoid excessive caffeine or alcohol.",
      ],
      image: pittaImage, // Image for Pitta
    },
    Kapha: {
      qualities: [
        "Kapha is heavy, causing sluggishness and weight gain.",
        "Kapha is slow, leading to careful decision-making and movement.",
        "Kapha is cool, making individuals comfortable in cooler weather.",
        "Kapha is stable, giving a grounded and balanced personality.",
        "Kapha is moist, contributing to hydrated skin and excess mucus.",
        "Kapha is dense, leading to strong bones and endurance.",
      ],
      balance: [
        "Eat light, warm, and spicy foods.",
        "Engage in stimulating activities.",
        "Stay active and avoid heavy meals.",
        "Drink warm, herbal teas.",
        "Take brisk walks to keep your energy moving.",
        "Avoid sleeping too much and wake up early to stay energized.",
      ],
      dos: [
        "Consume foods with pungent and bitter tastes.",
        "Exercise regularly to stay energized.",
        "Drink warm water and stay hydrated.",
      ],
      donts: [
        "Avoid heavy, greasy foods.",
        "Don’t skip exercise or stay idle for long.",
        "Avoid cold, damp environments.",
      ],
      image: kaphaImage, // Image for Kapha
    },
    VataKapha: {
      qualities: [
        "VataKapha is dry and heavy, leading to low energy and sluggishness.",
        "VataKapha is light but slow, making individuals indecisive.",
        "VataKapha is cold and cool, requiring warmth in diet and activities.",
        "VataKapha is rough and stable, leading to dryness and stability.",
      ],
      balance: [
        "Eat warm, oily, and grounding foods.",
        "Engage in calming but stimulating activities like yoga.",
        "Stay active but avoid too much exertion.",
        "Dress warmly and avoid cold, damp places.",
      ],
      dos: [
        "Incorporate root vegetables and grains.",
        "Practice gentle exercises like walking and yoga.",
        "Eat meals regularly to avoid imbalance.",
      ],
      donts: [
        "Avoid heavy, greasy foods.",
        "Don’t skip meals or overeat.",
        "Avoid sitting still for long periods.",
      ],
      image: kaphaVataImage, // Image for KaphaVata
    },
    VataPitta: {
      qualities: [
        "VataPitta is sharp and dry, leading to quick but irritable thinking.",
        "VataPitta is light and hot, making individuals energetic but prone to agitation.",
        "VataPitta is cold but intense, creating emotional highs and lows.",
      ],
      balance: [
        "Eat cooling but nourishing foods.",
        "Practice both calming and energizing exercises.",
        "Stay hydrated with warm and cooling drinks.",
        "Engage in both calming and stimulating activities.",
      ],
      dos: [
        "Consume fresh fruits and vegetables.",
        "Practice mindfulness and meditation.",
        "Stay cool in the summer but avoid too much cold.",
      ],
      donts: [
        "Avoid spicy and fried foods.",
        "Don’t skip meals or overwork.",
        "Avoid too much caffeine and alcohol.",
      ],
      image: vataPittaImage, // Image for VataPitta
    },
    KaphaPitta: {
      qualities: [
        "KaphaPitta is heavy and sharp, making individuals both grounded and intense.",
        "KaphaPitta is cool but oily, requiring warmth and moderation.",
        "KaphaPitta is stable but intense, leading to strong emotions and endurance.",
      ],
      balance: [
        "Eat light but spicy and cooling foods.",
        "Engage in both vigorous and calming exercises.",
        "Stay active and balanced throughout the day.",
        "Avoid too much fat and cold foods.",
      ],
      dos: [
        "Consume foods with a balance of bitter and pungent flavors.",
        "Exercise regularly to stay energized.",
        "Drink warm herbal teas to balance digestion.",
      ],
      donts: [
        "Avoid heavy, greasy foods.",
        "Don’t overindulge in spicy or oily foods.",
        "Avoid long periods of inactivity.",
      ],
      image: kaphaPittaImage, // Image for KaphaPitta
    },
  };

  const data = doshaData[dosha] || {};

  return (
    <div className="result-container">
      <h2 className="dosha-title">Your Dosha is likely to be {dosha} 🌿</h2>

      {/* Dosha Image */}
      {data.image && (
        <div className="dosha-image-container">
          <img src={data.image} alt={`${dosha} Dosha`} className="dosha-image" />
        </div>
      )}

      {/* Flex container for qualities and balance */}
      <div className="result-section-container">
        <div className="result-section left">
          <h2>Qualities of {dosha}:</h2>
          <ul className="center-list">
            {data.qualities?.map((quality, index) => (
              <li key={index}>{quality}</li>
            ))}
          </ul>
        </div>

        <div className="result-section right">
          <h2>How to Balance {dosha}:</h2>
          <ul className="center-list">
            {data.balance?.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dos and Don'ts section */}
      <div className="dos-donts-container">
        <div className="result-section dos">
          <h2>✅ Dos:</h2>
          <ul>
            {data.dos?.map((doItem, index) => (
              <li key={index}>{doItem}</li>
            ))}
          </ul>
        </div>
        <div className="result-section donts">
          <h2>❌ Don'ts:</h2>
          <ul>
            {data.donts?.map((dontItem, index) => (
              <li key={index}>{dontItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
