import { Camera } from "components/camera/camera";
import { Logo } from "components/logo/logo";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  DotScreen,
} from "react-postprocessing";

const App: React.FC = () => {
  return (
    <Canvas orthographic>
      <Suspense fallback={null}>
        <Camera />
        <color attach="background" args={[0.08, 0.08, 0.08]} />
        <Logo />
      </Suspense>
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={2}
        />
        <Noise opacity={0.1} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <DotScreen />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
