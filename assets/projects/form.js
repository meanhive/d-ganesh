import { API_REFERENCE } from '../utilities/constant_api';
import { htmlPost } from '../components/ajax';
import * as constantConfig from '../utilities/constant_config';
import { validateEmailId } from '../utilities/utility';

const $doc = $(document);
const resend_optionChecked = '.doc-to-resend:checked';
const patientConsent = 'patientConsent';
const primarycheck = '.primary-check';
const marketingConsent = 'marketingConsent';
const bothSelected = 'bothSelected';
const hiddenClass = 'hidden';
const selectAddressDiv = $('.select-addressdiv');
const resendEmailDiv = $('.resend-email-div');
const emailCheckchecked = '.emailCheck:checked';
const emailAddDiv = $('.email-add-div');
const empty = '';
let emailAdd = $('.email-add-div .emailAdd');
const mailCheck = $('.mailCheck');
const check = 'checked';
const mailCheckchecked = '.mailCheck:checked';
let emailCheck = $('.emailCheck');
let firstSelct = $('.firstSelect');
const formateSpan = '.error-msg-text-email';
const clearSelect = '.clearSelect:checked';
const submitDiv = $('.submitDiv');
const resendEmail = '#resend-email';
const submitForm = '#resendSubmit';
const emailempty = '#email-empty-error';

const checkMain = {
  selectResendOption() {
    let resend_option = $(resend_optionChecked).val();
    if (
      resend_option == patientConsent ||
      resend_option == marketingConsent ||
      resend_option == bothSelected
    ) {
      resendEmailDiv.removeClass(hiddenClass);
      submitDiv.removeClass(hiddenClass);
      selectAddressDiv.addClass(hiddenClass);
    } else {
      resendEmailDiv.addClass(hiddenClass);
    }
  },
  emailCheckList() {
    if ($(emailCheckchecked).val()) {
      emailAddDiv.removeClass(hiddenClass);
      emailAdd.val(empty);
    } else {
      $(resendEmail).val(empty);
      emailAddDiv.addClass(hiddenClass);
      emailAddDiv.find(formateSpan).addClass(hiddenClass);
    }
  },
  mailCheckList() {
    if ($(mailCheckchecked).val()) {
      selectAddressDiv.removeClass(hiddenClass);
      firstSelct.each(function() {
        $(this).prop(check, true);
      });
    } else {
      selectAddressDiv.addClass(hiddenClass);
    }
  },
  validateEmail() {
    var emailId = $(resendEmail).val();
    var email = validateEmailId(emailId);
    if (email === false) {
      emailAddDiv.find(formateSpan).removeClass(hiddenClass);
    } else {
      emailAddDiv.find(formateSpan).addClass(hiddenClass);
    }
  },
  clearSelection() {
    $(clearSelect).each(function() {
      $(this).prop(check, false);
    });
    checkMain.selectResendOption();
    checkMain.emailCheckList();
    checkMain.mailCheckList();
    submitDiv.addClass(hiddenClass);
    $(resendEmail).val(empty);
  },
  formSubmit() {
    let resend_option = $(resend_optionChecked).val();
    let primarAddress,
      firstName,
      lastName,
      priAddChecked = true,
      add1,
      add2,
      careOf,
      city,
      state,
      zip;

    if ($(emailCheckchecked).val()) {
      if ($(resendEmail).val() === empty) {
        $(emailempty).removeClass(hiddenClass);
      } else {
        $(emailempty).addClass(hiddenClass);
      }
    }

    $('.resend-doc-row').each(function() {
      if (priAddChecked) {
        if (
          $(this)
            .find('input[name = selct-address]')
            .is(':checked')
        ) {
          primarAddress = $(this)
            .find('input[name = prim-address]')
            .is(':checked');
          add1 = $(this)
            .find('.line1')
            .text();
          add2 = $(this)
            .find('.line2')
            .text();
          careOf = $(this)
            .find('.careof')
            .text();
          city = $(this)
            .find('.town')
            .text();
          state = $(this)
            .find('.region')
            .text();
          zip = $(this)
            .find('.zip')
            .text();
          priAddChecked = false;
        }
      }
    }),
      // TODO - will resolve while integration
      $.ajax({
        type: 'POST',
        url:
          '/chhinternalstorefront/customerDocuments-overview/resendDocuments',
        data: {
          patientConsent: resend_option == 'patientConsent',
          marketingConsent: resend_option == 'marketingConsent',
          bothSelected: resend_option == 'bothSelected',
          email: $('input[name = email]').is(':checked'),
          mail: $('input[name = mail]').is(':checked'),
          emailId: $('input[name = emailField]').val(),
          primaryAddr: primarAddress,
          firstName: $('input[name = firstName]').val(),
          lastName: $('input[name = lastName]').val(),
          addrLine1: add1,
          addrLine2: add2,
          careOf: careOf,
          city: city,
          state: state,
          zip: zip
        },

        success: function success(data) {
          if (data === true) {
            $('.resendDoc-model-success').removeAttr('hidden');
          } else if (data === false) {
            $('.resendDoc-model-error').removeAttr('hidden');
          }
        },
        error: function error(XMLHttpRequest, textStatus, errorThrown) {}
      });
  },
  actions() {
    $doc.on('input', resendEmail, this.validateEmail);
    $doc.on('click', '.mailCheck', this.mailCheckList);
    $doc.on('click', '.emailCheck', this.emailCheckList);
    $doc.on('change', '.doc-to-resend', this.selectResendOption);
    $doc.on('click', '.cancelResendDocButton', this.clearSelection);
    $doc.on('click', submitForm, this.formSubmit);
  }
};
checkMain.actions();