import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'




function Create3DText(canvas, size, text, speed) {
    var SonaCanvas = document.getElementById(canvas);

    const scene = new THREE.Scene( );
    const camera = new THREE.PerspectiveCamera( 20, 320 / 100, 0.1, 2000 );

    const renderer = new THREE.WebGLRenderer({
            canvas: SonaCanvas,
            antialias: false,
            alpha: true        
        });

    var width = 450
    var height = 100
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    const scaleFactor = size;

    renderer.setPixelRatio( window.devicePixelRatio * scaleFactor);

    const controls = new OrbitControls( camera, renderer.domElement );

    const loader = new FontLoader()
    loader.load('../font/csans.json', function ( font ) {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        
        });
        textGeometry.center()
        
        const textMaterial = new THREE.MeshPhongMaterial();
     
        const introText = new THREE.Mesh(textGeometry, textMaterial);
        introText.position.set(0, 0, -700);
        scene.add(introText);
        
        function animate() {

            setTimeout( function() {
                requestAnimationFrame( animate );
                introText.rotation.y += 0.5
            }, 1000 / speed );
            renderer.render( scene, camera );
            
        }
        animate();
        
    });

    const pointLight = new THREE.PointLight(0xffffff, 1.5); 
    pointLight.position.set(0, 100, 60); 
    scene.add(pointLight);
}


getData(() => {
    Create3DText("sona", 0.5, Sona, 10)
    Create3DText("linksbtn", 0.5, Links, 10)
});
