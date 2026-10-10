import { EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { Spark } from './optimus';
import type { OptimusConfigType } from './optimus.types';

export const OPTIMUS_CONFIG = new InjectionToken<OptimusConfigType>('OPTIMUS_CONFIG');
export const SPARK_CONFIG = OPTIMUS_CONFIG;

export function provideOptimus(...features: OptimusConfigType[]): EnvironmentProviders {
    const providers = features?.map((feature) => ({
        provide: OPTIMUS_CONFIG,
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

export const provideSpark = provideOptimus;
