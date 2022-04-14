function cone(radius, height) {

    let coneVolume = (Math.PI * Math.pow(radius, 2) * height) / 3;       // V = π ∙ r2 ∙ h / 3 ;
    let coneSideHeight = Math.pow(radius, 2) + Math.pow(height, 2);      //l2 = h2 + r2 ; всичко е на втора степен !!! ;
    coneSideHeight = Math.sqrt(coneSideHeight);                          // корен квадратен !!! ; l = √(h2 + r2) ;
    let totalSurfaceArea = Math.PI * radius * (radius + coneSideHeight); // SA = π · r · (r + l) ;

    console.log("volume = " + coneVolume.toFixed(4));
    console.log("area = " + (totalSurfaceArea).toFixed(4));
}
cone(3, 5);
console.log("-------");
cone(3.3, 7.8);