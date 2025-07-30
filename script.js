// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }

  // Contact Form Handler
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const subject = formData.get("subject")
      const message = formData.get("message")

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Por favor, preencha todos os campos.")
        return
      }

      // Simulate form submission
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(15, 23, 42, 0.98)"
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.95)"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe cards and other elements
  document.querySelectorAll(".card, .skill-card, .project-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // WhatsApp integration
  const whatsappNumbers = document.querySelectorAll(".contact-value")
  whatsappNumbers.forEach((number) => {
    if (number.textContent.includes("99231-3768")) {
      number.style.cursor = "pointer"
      number.addEventListener("click", () => {
        const phoneNumber = "5569992313768"
        const message = "Olá André! Vi seu portfólio e gostaria de conversar sobre um projeto."
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
      })
    }
  })

  // Email integration
  const emailElements = document.querySelectorAll(".contact-value")
  emailElements.forEach((email) => {
    if (email.textContent.includes("@gmail.com")) {
      email.style.cursor = "pointer"
      email.addEventListener("click", () => {
        const emailAddress = "andrealvesmaciel.373@gmail.com"
        const subject = "Contato através do portfólio"
        const body = "Olá André,\n\nVi seu portfólio e gostaria de conversar sobre um projeto.\n\nAguardo seu retorno."
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoUrl
      })
    }
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Typing effect for hero title (only on inicio.html)
if (window.location.pathname.includes("inicio.html") || window.location.pathname === "/") {
  document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero-title")
    if (heroTitle) {
      const text = heroTitle.textContent
      heroTitle.textContent = ""
      heroTitle.style.borderRight = "2px solid #60a5fa"

      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 100)
        } else {
          heroTitle.style.borderRight = "none"
        }
      }

      setTimeout(typeWriter, 1000)
    }
  })
}

// Project card interactions
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Skill card hover effects
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card")

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".skill-icon")
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)"
        icon.style.transition = "transform 0.3s ease"
      }
    })

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".skill-icon")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })
})
