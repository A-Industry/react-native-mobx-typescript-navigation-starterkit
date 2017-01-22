import {Container} from 'inversify';
import {UserStore} from '../logic/stores/user.store';
import {ApiGateway} from '../logic/core/api/apigateway';
import {Properties} from '../settings/properties';
import {HttpClient} from '../logic/core/api/httpclient';
import getDecorators from 'inversify-inject-decorators';
import {UserDataSource} from '../logic/datasources/user.datasource';
import "reflect-metadata";
import {Symbols} from './ioc.symbols';

let iocContainer = new Container();
iocContainer.bind<Properties>(Properties).to(Properties);

//Core
iocContainer.bind<HttpClient>(Symbols.DefaultHttpClient).toDynamicValue(context => new HttpClient(context.container.get<Properties>(Properties).defaultApiUrl));
iocContainer.bind<ApiGateway>(Symbols.DefaultApiGateway).to(ApiGateway);

//Stores
iocContainer.bind<UserStore>(Symbols.UserStore).to(UserStore).inSingletonScope();

//Datasources
iocContainer.bind<UserDataSource>(Symbols.UserDataSource).to(UserDataSource);

let { lazyInject } = getDecorators(iocContainer);

export const Inject = lazyInject;