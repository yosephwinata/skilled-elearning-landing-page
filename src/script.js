import iconAnimation from "./assets/icon-animation.svg";
import iconDesign from "./assets/icon-design.svg";
import iconPhotography from "./assets/icon-photography.svg";
import iconCrypto from "./assets/icon-crypto.svg";
import iconBusiness from "./assets/icon-business.svg";

document.addEventListener("DOMContentLoaded", () => {
  const cardTemplate = document.getElementById("card-template").content;
  const featuresSection = document.getElementById("features-section");

  function createCard(imageSrc, imageAlt, title, description) {
    // 'true' indicates whether you want to perform a deep clone, which means all the child nodes of the cardTemplate will also get cloned. If you pass false, only the node itself would be cloned.
    const clone = document.importNode(cardTemplate, true);
    clone.querySelector("img").setAttribute("src", imageSrc);
    clone.querySelector("img").setAttribute("alt", imageAlt);
    clone.querySelector("h2").innerText = title;
    clone.querySelector("p").innerText = description;
    return clone;
  }

  function populateData() {
    featuresSection.appendChild(
      createCard(
        iconAnimation,
        "Animation Icon",
        "Animation",
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      ),
    );
    featuresSection.appendChild(
      createCard(
        iconDesign,
        "Design Icon",
        "Design",
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      ),
    );
    featuresSection.appendChild(
      createCard(
        iconPhotography,
        "Photography Icon",
        "Photography",
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      ),
    );
    featuresSection.appendChild(
      createCard(
        iconCrypto,
        "Crypto Icon",
        "Crypto",
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
      ),
    );
    featuresSection.appendChild(
      createCard(
        iconBusiness,
        "Business Icon",
        "Business",
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      ),
    );
  }

  populateData();
});
