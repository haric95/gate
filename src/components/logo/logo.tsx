import { useGLTF } from "drei";
import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshNormalMaterial, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFLogoResult = GLTF & {
  nodes: {
    path1203: THREE.Mesh;
  };
};

export const Logo: React.FC = () => {
  const logoRef = useRef<null | Object3D>(null);

  const { nodes: logoNodes } = useGLTF(
    "/gate.glb"
  ) as unknown as GLTFLogoResult;

  const [isMouseOver, setIsMouseOver] = useState(false);

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotateZ(0.01);
      if (isMouseOver) {
        logoRef.current.rotateY(0.005);
      }
    }
  });

  const regMaterial = useMemo(() => {
    return new MeshNormalMaterial({ wireframe: false });
  }, []);

  const wireframeMaterial = useMemo(() => {
    return new MeshNormalMaterial({ wireframe: true });
  }, []);

  return (
    <>
      <mesh
        onPointerOver={() => setIsMouseOver(true)}
        onPointerOut={() => setIsMouseOver(false)}
        ref={logoRef}
        material={isMouseOver ? wireframeMaterial : regMaterial}
        geometry={logoNodes.path1203.geometry}
        scale={[5000, 5000, 5000]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2.5, 0, 0]}
      ></mesh>
    </>
  );
};
