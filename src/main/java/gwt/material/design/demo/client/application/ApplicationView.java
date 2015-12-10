package gwt.material.design.demo.client.application;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.cellview.client.SafeHtmlHeader;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.client.constants.ShowOn;
import gwt.material.design.client.ui.MaterialLabel;
import gwt.material.design.client.ui.MaterialNavBar;
import gwt.material.design.client.ui.MaterialSideNav;
import gwt.material.design.client.ui.html.Header;

import javax.inject.Inject;

public class ApplicationView extends ViewImpl implements ApplicationPresenter.MyView {
    public interface Binder extends UiBinder<Widget, ApplicationView> {
    }

    @UiField Header header;
    @UiField MaterialNavBar navBar;
    @UiField MaterialSideNav sideNav;
    @UiField HTMLPanel main;
    @UiField MaterialLabel title, description;

    @Inject
    ApplicationView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));

        bindSlot(ApplicationPresenter.SLOT_MainContent, main);
    }

    @Override
    public void setPageTitle(String title, String description) {
        this.title.setText(title);
        this.description.setText(description);
        sideNav.hide(sideNav.getElement());
    }

    @UiHandler("imgGPlus")
    void onGPlus(ClickEvent e){
        Window.open("https://plus.google.com/communities/108005250093449814286", "", "_blank");
    }
}