class Task < ApplicationRecord
  include Enumerize

  validates :title, presence: true
  enumerize :status, in: [:to_do, :in_progress, :done], default: :to_do
end
