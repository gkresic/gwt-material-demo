package gwt.material.design.demo.client.application;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import gwt.material.design.demo.client.application.about.AboutModule;
import gwt.material.design.demo.client.application.charts.ChartsModule;
import gwt.material.design.demo.client.application.components.ComponentsModule;
import gwt.material.design.demo.client.application.gettingstarted.GettingStartedModule;
import gwt.material.design.demo.client.application.showcase.ShowcaseModule;
import gwt.material.design.demo.client.application.style.StyleModule;
import gwt.material.design.demo.client.application.templates.TemplatesModule;

public class ApplicationModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(ApplicationPresenter.class, ApplicationPresenter.MyView.class,
            ApplicationView.class, ApplicationPresenter.MyProxy.class);

        install(new TemplatesModule());
        install(new ShowcaseModule());
        install(new GettingStartedModule());
        install(new AboutModule());
        install(new ComponentsModule());
        install(new StyleModule());
        install(new ChartsModule());
    }
}
