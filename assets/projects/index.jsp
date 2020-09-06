<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/responsive/template"%>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="documents" tagdir="/WEB-INF/tags/responsive/documents"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>



<spring:htmlEscape defaultHtmlEscape="true" />

<div class="documents-main-div pl-0 pr-0">
    <form:form id="chhResendDocumentForm" commandName="chhResendDocumentForm">
                                        
    <div class="col-md-12 pl-0">
    <div class="container-fluid customer-document-container">

        <div class="col-sm-12 resendDoc-model-success" hidden>
            <div class="resendDoc-model-success-inner d-flex">
                <div class="pl-3">
                    <img
                        src="${themeResourcePath}/images/internal/icon_check_circle_dark_green.svg"
                        alt="Check Icon" class="icon-alert" />
                </div>
            <div class="resendDoc-model-success-text pl-2" ><spring:theme code="text.documents.success.message" /></div>
                </div>
            </div>
             <div class="col-sm-12 resendDoc-model-error" hidden>
            <div class="resendDoc-model-error-inner d-flex">
                <div class="pl-3">
                    <img
                        src="${themeResourcePath}/images/internal/icon_alert_fill_red.svg"
                        alt="Check Icon" class="icon-alert" />
                </div>
            <div class="resendDoc-model-error-text pl-2" ><spring:theme code="text.documents.error.message" /></div>
                </div>
            </div>
        <div class="customer-document-page-heading mt-4">
            <spring:theme code="text.resend.documents.heading" />           
        </div>

        <div class="col-md-12 pr-2 pl-0 mt-2">
            <div class="col-md-12 pl-0 pr-0 mb-4">
                <div class="col-md-4 pl-0 pr-5 mr-5">
                    <h4 class="resend-title">
                        <spring:theme code="text.resend.documents.would.like.toresend" />      
                    </h4>

                    <div class="col-md-8 col-md-8 pl-0">
                    <label class="radio-inline mx-0 mb-3">
                        <input type="radio" value="patientConsent" class="doc-to-resend clearSelect" name="optradio" /> 
                        <span class="pl-2 radio-inline-text"><spring:theme code="text.resend.documents.patient.consent" /></span>
                    </label>
                    </div>
                    <div class="col-md-8 col-md-8 pl-0">
                    <label class="radio-inline mx-0 mb-3">
                        <input type="radio" value="marketingConsent" class="doc-to-resend clearSelect" name="optradio" /> 
                        <span class="pl-2 radio-inline-text">
                            <spring:theme code="text.resend.documents.marketing.consent" /></span>
                    </label>
                        </span>
                    </label>
                    </div>
                    <div class="col-md-8 col-md-8 pl-0">
                        <label class="radio-inline mx-0 mb-3">
                            <input type="radio" value="bothSelected" class="doc-to-resend clearSelect" name="optradio" /> 
                            <span class="pl-2 radio-inline-text">
                                <spring:theme code="text.resend.documents.both" />
                            </span>
                        </label>
                    </div>
                </div>
                <div class="col-md-6 pl-5 resend-email-div hidden">
                        <h4 class="resend-title">
                            <spring:theme code="text.resend.documents.like.toresend.documents" />
                        </h4>
                        <div class="checkbox resend-doc-checkbox">
                            <label><input type="checkbox" value="true" id="resend-emailInput" name="email" class="emailCheck clearSelect documents-custom-checkbox">
                                <span class="documents-custom-checkbox-toggle"></span>
                                <span class="documents-label">
                                    <spring:theme code="text.resend.documents.email" /></span>                                   
                            </label>
                        </div>
                          <div class="col-md-12 resend-doc-input email-add-div hidden">
                              <h4 class="resend-title">
                                <spring:theme code="text.resend.documents.enter.email.address" /></h4>
                              <label><input type="email" id="resend-email" class="col-md-11 pb-2 pr-0 clearSelect"
                                   name="emailField" /></label>
                              <div class="error-msg-email error-msg-text hidden" id="email-empty-error">
                                <spring:theme code="text.customer-document.emptyEmail" />
                             </div>
                             <div class="error-msg-text-email error-msg-text hidden" id="email-error">
                                <spring:theme code="text.customer-document.errorMessage" />
                             </div>
                          </div>
                          <div class="resend-doc-checkbox">
                            <label><input type="checkbox" value="true" name="mail" class="mailCheck clearSelect documents-custom-checkbox"> 
                                <span class="documents-custom-checkbox-toggle"></span>
                                <span class="documents-label">
                                    <spring:theme code="text.resend.documents.mail" />
                                </span>
                               
                            </label>
                          </div>
                </div>
            </div>
           
            <div class="mt-4 pt-5 select-addressdiv hidden">
            <h4 class="resend-title mt-4"><spring:theme code="text.resend.documents.select.address" /></h4>                
            <div class="col-md-12 pr-2 pl-0 mb-4">
              
                <table class="col-md-12 px-0 table mb-0 resend-doc-table">
                    <thead class="resend-doc-header">
                    <th>&nbsp;</th>
                    <th><spring:theme code="text.resend.documents.address.primary" /></th>
                    <th><spring:theme code="text.resend.documents.address.careof" /></th>
                    <th><spring:theme code="text.resend.documents.address.lineone" /></th>
                    <th><spring:theme code="text.resend.documents.address.linetwo" /></th>
                    <th><spring:theme code="text.resend.documents.address.city" /></th>
                    <th><spring:theme code="text.resend.documents.address.state" /></th>
                    <th><spring:theme code="text.resend.documents.address.zip" /></th>
                    </thead>
              
                    <tbody class="resend-doc-body">
                        <c:forEach items="${addressData}" var="address">
                        <tr class="resend-doc-row">
                            <td>
                                <div class="radio">
                                  <label><input type="radio" name="selct-address" class="clearSelect"></label>
                                </div>
                            </td>
                            <td>
                                <div class="resend-doc-checkbox">
                                <c:if test="${address.defaultAddress eq true}">
                                    <label><input type="checkbox" value='${address.defaultAddress}' checked="checked" name="prim-address" class="documents-custom-checkbox">
                                        <span class="documents-custom-checkbox-toggle"></span>                                      
                                    </label>
                                    </c:if>
                                  </div>
                            </td>
                            <td class="careof">${address.careOf}</td>
                            <td class="line1">${address.line1}</td>
                            <td class="line2">${address.line2}</td>
                            <td class="town">${address.town}</td>
                            <td class="region">${address.region.isocodeShort}</td>
                            <td class="zip">${address.postalCode}</td>  
                           <c:if test="${not empty customerData}">
                            <span class="hidden">${customerData.firstName} ${customerData.lastName}</span>
                           </c:if>
                        </tr>
                    </c:forEach>
                        
                    </tbody>
                </table>
            
            </div>
            </div>
        
       <div class="pull-right mt-5 pt-4 mb-5 submitDiv hidden">        
        <input id="firstName" name="firstName" type="hidden" value="${customerData.firstName}"/>
        <input id="lastName" name="lastName" type="hidden" value="${customerData.lastName}"/>
                <button type="button" id="" class="col-md-2 btn btn-cancel cancelResendDocButton cancel custom-button-gray pb-3">
                    <spring:theme code="text.resend.documents.cancel.button" />
                </button>
                <button type="button" id="resendSubmit" class="col-md-2 btn-submit submitResendDocButton submit custom-button ml-3 pb-3">
                    <spring:theme code="text.resend.documents.submit.button" />
                </button>
            </form:form>  
            </div>
        </div>
        </div>
    </div>

</div>