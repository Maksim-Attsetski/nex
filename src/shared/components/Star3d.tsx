import { useRef, useState, useEffect, memo } from 'react';

import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type TGLTF = GLTF & { materials: any; nodes: any };

const Star = (props: GroupProps) => {
  const group = useRef<any>();
  const nodes = useGLTF('/star-icon.glb') as TGLTF;
  const [material, setMaterial] = useState<any>(null);

  useFrame(() => {
    group.current.rotation.y -= 0.01;
  });

  const onClickStar = () => {
    const newColor = {
      b: Math.random(),
      g: Math.random(),
      r: Math.random(),
      isColor: true,
    };

    setMaterial({ ...nodes.materials['Material.003'], color: newColor });
  };

  useEffect(() => {
    setMaterial({ ...nodes.materials['Material.003'] });
  }, [nodes.materials]);

  return (
    <group ref={group} {...props} onClick={onClickStar}>
      <primitive object={nodes.nodes['Star']} />
      {material && <material {...material} />}
    </group>
  );
};

export default memo(Star);
