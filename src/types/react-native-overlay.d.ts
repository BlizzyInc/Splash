declare module 'react-native-overlay' {
    import { ReactElement } from 'react';
    import { ViewStyle } from 'react-native';
  
    export default class Overlay {
      static View: React.ComponentType<{ style?: ViewStyle }>;
      static show(overlayElement: ReactElement): void;
      static hide(): void;
    }
  }
  