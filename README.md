
# How to Run Project

1. Clone project from
https://github.com/Farhatdjehan/coloring-app-only

2. Download UnityExport from https://drive.google.com/file/d/1E0j3lB0D35sDLGrhvO71MXXcfebgqleh/view?usp=sharing

3. Extract and copy UnityExport to ./android

4. Install SDK and NDK [How to Install ](#install-sdk-and-ndk). 
Then set installation path in ./android/local.properties.
Example :
sdk.dir=/Users/user_name/AppData/Local/Android/sdk
ndk.dir=/Users/user_name/AppData/Local/Android/NDK
(if you have already installed, just set installation path of SDK and NDK in local.properties)

5. Setup your environment variable, see this docs https://reactnative.dev/docs/environment-setup and select React Native CLI Quickstart or you can add a environment variable in System Variable with Variable Name ANDROID_HOME (for SDK path), and JAVA_HOME (for JDK path) and also in Path, click edit and add your platform-tools path. Repeat the step for User Variable for ANDROID_HOME (for SDK path) and platform-tools path.

6. Restart your computer
 
7. Run ```yarn install```

8. Run ```yarn android```


# Install SDK and NDK

## SDK
1. Download android studio
2. Open menu configure and select SDK Manager
3. Select SDK Platforms tab and choose SDK version (ie: Android 9.0, Android 10, or more). I use Android API 31, Android 11.0 (R), and Android 9.0 (Pie)
4. Click apply to download the SDK

## NDK
1. Download NDK from https://drive.google.com/file/d/1XCvHOqr0P6JuFko7MbxpwCU57ir53HEw/view?usp=sharing or https://developer.android.com/studio/projects/install-ndk
2. If you download from https://drive.google.com/file/d/1XCvHOqr0P6JuFko7MbxpwCU57ir53HEw/view?usp=sharing, extract and copy folder to C:\Users\{username}\AppData\Local\Android (ie C:\Users\Farha\AppData\Local\Android)