import { useGLTF, Text } from "drei";
import React, { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Color, MeshBasicMaterial, MeshNormalMaterial, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFLogoResult = GLTF & {
  nodes: {
    A_3_: THREE.Mesh;
  };
};

const NORMAL_SHADER = `
#define NORMAL
  uniform float opacity;

  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
  	varying vec3 vViewPosition;
  #endif
  #ifndef FLAT_SHADED
  	varying vec3 vNormal;
  	#ifdef USE_TANGENT
  		varying vec3 vTangent;
  		varying vec3 vBitangent;
  	#endif
  #endif
  #include <packing>
  #include <uv_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>

  vec3 createColor( const in vec3 normal ) {
    return normalize( (vec3(0.0, 1.0, 0.05) * normal.z - 0.5) + vec3(0.0, 1.0, 0.05) * 0.2 );
  }

  void main() {
  	#include <clipping_planes_fragment>
  	#include <logdepthbuf_fragment>
  	#include <normal_fragment_begin>
  	#include <normal_fragment_maps>
  	gl_FragColor = vec4( createColor( normal ) , opacity );
  }
`;

export const Logo: React.FC = () => {
  const logoRef = useRef<null | Object3D>(null);

  const { nodes: logoNodes } = useGLTF(
    "/propagate.glb"
  ) as unknown as GLTFLogoResult;

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);

  const { viewport } = useThree();

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotateZ(0.01);
      const rand = Math.random();

      if (isWireframe) {
        if (rand < 0.1) {
          setIsWireframe(false);
        }
      } else {
        if (rand < 0.05) {
          setIsWireframe(true);
        }
      }
    }
  });

  const regMaterial = useMemo(() => {
    const material = new MeshNormalMaterial({ wireframe: false });

    material.onBeforeCompile = (shader) => {
      shader.fragmentShader = NORMAL_SHADER;
    };

    return material;
  }, []);

  const wireframeMaterial = useMemo(() => {
    const material = new MeshBasicMaterial({
      wireframe: true,
      color: new Color("rgb(0, 255, 30)"),
    });

    return material;
  }, []);

  return (
    <>
      <Text position={[0, 0, 0]} scale={[1000, 1000, 1000]} font="monospace">
        Grab A Tent Everybody
      </Text>
    </>
  );
};
