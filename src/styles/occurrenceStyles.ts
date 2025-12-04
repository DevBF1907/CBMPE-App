import { StyleSheet } from 'react-native';

export const occurrenceStyles = StyleSheet.create({
  // Form Styles
  formContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  formHeader: {
    backgroundColor: '#E53935',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 30,
    marginTop: -20,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#2D3748',
    minHeight: 48,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  priorityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  priorityButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  priorityButtonSelected: {
    backgroundColor: '#E53935',
    borderColor: '#E53935',
  },
  priorityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  priorityTextSelected: {
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#E53935',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  // List Styles
  listContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  listHeader: {
    backgroundColor: '#E53935',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  listTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  listSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  listContent: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: -20,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#E53935',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  listContainerStyle: {
    paddingBottom: 20,
  },
  occurrenceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  occurrenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  occurrenceType: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A202C',
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  priorityTextBadge: { // renomeada para evitar duplicação
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  occurrenceAddress: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  occurrenceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  occurrenceDate: {
    fontSize: 12,
    color: '#94A3B8',
  },
});
