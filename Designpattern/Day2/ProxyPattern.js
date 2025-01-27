// A proxy is used to manage access to the RealImage object, loading the image lazily when needed.


class RealImage {
    constructor(filename) {
      this.filename = filename;
      this.loadImage();
    }
  
    loadImage() {
      console.log(`Loading image : ${this.filename}`);
    }
  
    display() {
      console.log(`Displaying image: ${this.filename}`);
    }
  }
  
  // Proxy Image Class
  class ProxyImage {
    constructor(filename) {
      this.filename = filename;
      this.realImage = null;
    }
  
    display() {
      if (!this.realImage) {
        this.realImage = new RealImage(this.filename); // Load only when needed
      }
      this.realImage.display();
    }
  }
  

  const proxyImage = new ProxyImage("big_picture.jpg");
  
  console.log("Image created. No loading yet.");
  proxyImage.display(); // Load and display
  proxyImage.display(); // Display without loading again
  