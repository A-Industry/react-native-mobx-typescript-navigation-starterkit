package com.reactnativets;

import android.support.annotation.Nullable;
import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            new ReactNativeI18n(),
            new VectorIconsPackage()
        );
    }
}