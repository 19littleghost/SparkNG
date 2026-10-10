import { EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { Spark } from './spark';
import type { SparkConfigType } from './spark.types';

export const SPARK_CONFIG = new InjectionToken<SparkConfigType>('SPARK_CONFIG');

export function provideSpark(...features: SparkConfigType[]): EnvironmentProviders {
    const providers = features?.map((feature) => ({
        provide: SPARK_CONFIG,
        useValue: feature,
        multi: false
    }));

    const initializer = provideAppInitializer(() => {
        const config = inject(Spark);
        features?.forEach((feature) => config.setConfig(feature));
        return;
    });

    return makeEnvironmentProviders([...providers, initializer]);
}

/** @deprecated Since v20. Use `provideSpark` instead. */
export const provideOptimus = provideSpark;

/** @deprecated Since v20. Use `SPARK_CONFIG` instead. */
export const OPTIMUS_CONFIG = SPARK_CONFIG;
